import { useForm } from "react-hook-form";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import styled from "styled-components";
import { usePopup } from "@telegram-apps/sdk-react";
import { ArrowLeft } from "./ArrowLeft";
import ModalContent, { CustomFormData } from "./ModalContent";

const defaultValues: CustomFormData = {
    name: "",
    sex: "M"
};

interface IDemoModalProps {
    readonly open: boolean;
    readonly setOpen: (value: boolean) => void;
}

export const DemoModal = ({ open, setOpen }: IDemoModalProps): JSX.Element => {
    const popup = usePopup();
    const form = useForm<CustomFormData>({ defaultValues });

    const onCloseClicked = () => {
        if (Object.entries(form.formState.dirtyFields).length === 0) {
            form.reset();
            setOpen(false);
            return;
        }

        popup.open({ message: "Data will be removed", buttons: [
            { id: "cancel", type: "cancel" },
            { id: "ok", type: "destructive", text: "ok" }
        ]}).then((id) => {
            if (id === "ok") {
                setOpen(false);
                form.reset();
            }
        });
    }

    return (
        <Modal fullscreen={true} isOpen={open} fade={false} onClosed={() => void 0}>
			<ContainerStyled>
                <GoBackButtonStyled onClick={onCloseClicked}>
                    <ArrowLeft />
                </GoBackButtonStyled>
                <ModalHeader style={{ borderBottom: "none", justifyContent: "center", paddingTop: 0, marginBottom: 20 }}>
                    <HeaderStyled>Demo Modal</HeaderStyled>
                </ModalHeader>
                <ModalBody>
                    <ModalContent form={form} />
                </ModalBody>
            </ContainerStyled>
        </Modal>
    );
}

// [== STYLES ==]
const ContainerStyled = styled.div`
    background-color: #F5F5F5;
    height: inherit;
    position: relative;
    display: flex;
    flex-direction: column;
`;
const GoBackButtonStyled = styled.button`
	position: absolute;
	top: 25px;
	left: 5px;
	border: none;
	padding: 0;
	cursor: pointer;
    background-color: inherit;
`;

const HeaderStyled = styled.div`
    font-weight: 600;
    font-size: 22px;
    width: 100%;
    text-align: center;
`;