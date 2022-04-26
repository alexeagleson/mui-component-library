import Button from '@mui/material/Button';

export interface IMyCustomButtonProps {}

const MyCustomButton: React.FC<IMyCustomButtonProps> = () => {
  return <Button sx={{ color: 'secondary.main' }}>Custom Button</Button>;
};

export default MyCustomButton;
