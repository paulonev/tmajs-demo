import { CSSProperties } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { FormGroup, Input, Label } from "reactstrap";
import styled from "styled-components";

export interface CustomFormData {
    readonly name: string;
    readonly sex: "M" | "W" | "O"
}

interface IModalContentProps {
    form: UseFormReturn<CustomFormData>;
}

const ModalContent = ({ form }: IModalContentProps): JSX.Element => {
    const { register, control } = form;

    return (
        <form onSubmit={() => void 0}>
            <FormFieldStyled>
                <LabelStyled htmlFor="name">Name</LabelStyled>
                <InputStyled {...register("name")} autoComplete="off" />
            </FormFieldStyled>
            <Controller 
                name="sex"
                control={control}
                render={({ field: { onChange, onBlur, name, value, ref }}) => (
                    <FormFieldStyled>
                        <FormGroup>
                            <Label htmlFor="sex" style={LabelStyleRules}>
                                Sex
                            </Label>
                            <Input
                                type="select"
                                style={{...InputStyleRules, ...SelectResetStyles, ...ArrowStyleRules}}
                                onChange={onChange}
                                onBlur={onBlur}
                                name={name}
                                value={value}
                                innerRef={ref}
                            >
                                <option value="M">Man</option>
                                <option value="W">Woman</option>
                                <option value="O">Non-binary</option>
                            </Input>
                        </FormGroup>
                    </FormFieldStyled>
                )}
            />
        </form>
    )
}

export default ModalContent;

const LabelStyleRules = {
    display: "block",
    marginBottom: "10px",
    color: "#000",
    fontWeight: 500,
    fontSize: "14px"
} as CSSProperties;

const InputStyleRules = {
    width: "100%",
    padding: "10px 12px",
    border: "1.23px solid rgba(130, 130, 130, 0.1)",
    borderRadius: "12px",
    boxSizing: "border-box",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.15)",
    color: "#000",
    fontWeight: 400,
    fontSize: "16px",
    fontFamily: "inherit",
} as CSSProperties;

const ArrowStyleRules = {
    backgroundImage: "linear-gradient(45deg, transparent 50%, #007AFF 50%), linear-gradient(135deg, #007AFF 50%, transparent 50%)",
    backgroundPosition: "calc(100% - 20px) calc(1em + 6px), calc(100% - 15px) calc(1em + 6px), 100% 0",
    backgroundSize: "5px 5px, 5px 5px, 2.5em 2.5em",
    backgroundRepeat: "no-repeat"
} as CSSProperties;

const SelectResetStyles = {
    margin: 0,      
    boxSizing: "border-box",
    appearance: "none",
} as CSSProperties;

const LabelStyled = styled.label`
    display: block;
    margin-bottom: 10px;
    color: #000;
    font-weight: 500;
    font-size: 14px;
`;

const FormFieldStyled = styled.div`
    margin-bottom: 35px;
`;

const InputStyled = styled.input.attrs({
    type: "text"
})`
    width: 100%;
    padding: 12.5px 12px;
    border: 1.23px solid rgba(130, 130, 130, 0.1);
    border-radius: 12px;
    box-sizing: border-box;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
    color: #000;
    font-weight: 400;
    font-family: inherit;
    font-size: 16px;
`;