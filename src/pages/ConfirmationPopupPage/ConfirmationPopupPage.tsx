import { DemoModal } from '@/components/DemoModal';
import { useState, type FC } from 'react';

export const ConfirmationPopupPage: FC = () => {
    const [open, setOpen] = useState<boolean>(false);
	
	return (
		<>
			<DemoModal open={open} setOpen={setOpen} />
			<button onClick={() => setOpen(value => !value)}>Toggle</button>
		</>
	);
};
