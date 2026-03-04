import { Input } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside";



type TextFieldProps = {
  type: "text";
  value: string;
  onSave?: (value: string) => void;
  children: React.ReactNode;
};

type SelectFieldProps = {
  type: "select";
  value: string;
  options: string[];
  onSave: (value: string) => void;
  children: React.ReactNode;
};

type EditableFieldProps =
  | TextFieldProps
  | SelectFieldProps


export const EditableField = ({children, type, value}: EditableFieldProps) => {


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
        if (isEditing) {
            handleCancel(); 
        }
    });

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

                
                </>
            )}
        </div>
    );


}