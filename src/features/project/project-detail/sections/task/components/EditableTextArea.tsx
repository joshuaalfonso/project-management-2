import { useEffect, useRef, useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
import { Textarea } from "@chakra-ui/react";


interface TextAreaProps {
    // type?: "text";
    value: string;
    onSave?: (value: string) => void;
    children: React.ReactNode;
};

const EditableTextArea = (props: TextAreaProps) => {

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

    useClickOutside(wrapperRef, () => {
        if (isEditing && value !== tempValue) {
            onSave?.(tempValue); 
            handleCancel()
        } else {
            handleCancel()
        }
    });

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

                    <Textarea
                        size={'sm'}
                        value={tempValue}
                        onChange={(e) => setTempValue(e.target.value)}
                        autoFocus={false}
                        w={'full'}
                    />
                
                </>
            )}
        </div>
    )


}

export default EditableTextArea