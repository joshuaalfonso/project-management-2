import { createListCollection, Input, Portal, Select } from "@chakra-ui/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside";


type SelectOption = {
  label: string;
  value: number;
};

type TextFieldProps = {
  type: "text";
  value: string;
  onSave?: (value: string) => void;
  children: React.ReactNode;
};

type SelectFieldProps = {
  type: "select";
  value: string;
  options: SelectOption[];
  onSave?: (value: string) => void;
  children: React.ReactNode;
};

type EditableFieldProps =
  | TextFieldProps
  | SelectFieldProps


export const EditableField = (props: EditableFieldProps) => {

    const { children, type, value, onSave } = props;

    const [isEditing, setIsEditing] = useState(false);
    const [tempValue, setTempValue] = useState(value);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTempValue(value);
    }, [value]);

    const handleCancel = () => {
        setTempValue(value);
        setIsEditing(false);
    };

    useClickOutside(wrapperRef, () => {
        if (isEditing && value !== tempValue) {
            onSave?.(tempValue); 
            handleCancel()
        } else {
            handleCancel()
        }
    });

    console.log(tempValue)

    const collection = useMemo(() => {
    if (type === "select") {
        const selectProps = props as SelectFieldProps;
        return createListCollection({
        items: selectProps.options,
        itemToString: (item) => item.label,
        itemToValue: (item) => String(item.value),
        });
    }
    return null;
    }, [props, type]);


    return (
        <div ref={wrapperRef} className="h-10 flex items-center justify-start w-full">
            {!isEditing ? (
                <div 
                    onClick={() => setIsEditing(true)}
                >
                    {children}
                </div>
            ) : (
                <>

                    {type === "text" && (
                        <Input
                            size={'sm'}
                            value={tempValue}
                            onChange={(e) => setTempValue(e.target.value)}
                            autoFocus
                            w={'full'}
                        />
                    )}

                    {type === "select" && collection && (
                        <Select.Root
                            collection={collection}
                            value={[tempValue]} // must be a string
                            onValueChange={(details) => {
                                const selectedValue = details.value[0];
                                setTempValue(String(selectedValue));
                                console.log("Selected:", selectedValue); // this should fire
                            }}
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
                    )}

                
                </>
            )}
        </div>
    );


}