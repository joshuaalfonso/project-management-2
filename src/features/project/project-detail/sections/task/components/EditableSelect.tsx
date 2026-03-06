import { useEffect, useMemo, useRef, useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
import { Portal, Select, createListCollection } from "@chakra-ui/react";




interface SelectOption {
    label: string;
    value: number;
};

interface SelectFieldProps {
    type: "select";
    value: string;
    options: SelectOption[];
    onSave?: (value: string) => void;
    children: React.ReactNode;
};


const EditableSelect = (props: SelectFieldProps) => {

    const { children, value, onSave } = props;

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [tempValue, setTempValue] = useState<string>(value);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTempValue(value);
    }, [value]);

    const handleCancel = () => {
        setTempValue(value);
        setIsEditing(false);
    };

    // useClickOutside(wrapperRef, () => {
    //     if (isEditing && value !== tempValue) {
    //         onSave?.(tempValue); 
    //         handleCancel()
    //     } else {
    //         handleCancel()
    //     }
    // });

    useClickOutside(wrapperRef, () => {
        setTimeout(() => {
          if (isEditing && value !== tempValue) {
            onSave?.(tempValue);
          } else {
            handleCancel();
          }
        }, 100);
      });

    const collection = useMemo(() => {
        const selectProps = props as SelectFieldProps;
        return createListCollection({
            items: selectProps.options,
            itemToString: (item) => item.label,
            itemToValue: (item) => String(item.value),
        });
    }, [props.options]);

    return (
        <div ref={wrapperRef} className="h-auto flex items-center justify-start w-full">
            {!isEditing ? (
                <div 
                    onClick={() => setIsEditing(true)}
                >
                    {children}
                </div>
            ) : (
                <>

                    <Select.Root
                        collection={collection}
                        value={[tempValue]} 
                        open={isEditing}
                        onValueChange={(details) => {
                            const selectedValue = details.value[0];
                            setTempValue(String(selectedValue));
                            console.log("Selected:", selectedValue); 
                        }}
                        size={'sm'}
                        
                    >
                        <Select.HiddenSelect />

                        <Select.Control>
                        <Select.Trigger>
                            <Select.ValueText placeholder="Select" />
                        </Select.Trigger>
                        <Select.IndicatorGroup>
                            <Select.Indicator />
                        </Select.IndicatorGroup>
                        </Select.Control>

                        <Portal>
                            <Select.Positioner>
                                <Select.Content>
                                {collection.items.map((item) => (
                                    <Select.Item item={item} key={item.value}>
                                    {item.label}
                                    <Select.ItemIndicator />
                                    </Select.Item>
                                ))}
                                </Select.Content>
                            </Select.Positioner>
                        </Portal>
                    </Select.Root>

                </>
            )}
        </div>
    )
}

export default EditableSelect