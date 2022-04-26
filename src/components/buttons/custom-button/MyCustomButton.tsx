import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Button from '@mui/material/Button';

export interface IMyCustomButtonProps {}

const MyCustomButton: React.FC<IMyCustomButtonProps> = () => {
  return (
    <Button sx={{ color: 'secondary.main' }} startIcon={<CheckBoxIcon />}>
      Custom Button
    </Button>
  );
};

export default MyCustomButton;
