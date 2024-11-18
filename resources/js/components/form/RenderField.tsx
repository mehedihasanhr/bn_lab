import { cn } from '@/lib/utils';
import { useController, UseControllerProps } from 'react-hook-form';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface FormFieldProps extends UseControllerProps {
  label?: string;
  placeholder?: string;
  type: string;
}

export default function RenderField(props: FormFieldProps) {
  const { field, fieldState } = useController(props);
  return (
    <div className="flex flex-col gap-2">
      {props.label && (
        <Label
          htmlFor={field.name}
          className="text-sm font-medium text-gray-700"
        >
          {props.label}
        </Label>
      )}
      <Input
        id={field.name}
        type={props.type}
        placeholder={props.placeholder}
        {...field}
        className={cn(
          fieldState.error ? 'border-red-500 focus:ring-red-500' : '',
          'rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary',
        )}
      />
      {fieldState.error && (
        <p className="text-sm text-red-500">{fieldState.error.message}</p>
      )}
    </div>
  );
}
