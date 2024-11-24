import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import React from 'react';
import { Calendar } from '../ui/calendar';
import { Input } from '../ui/input';

const DatePicker = React.forwardRef<
  HTMLDivElement,
  { value?: Date; onChange: (date?: Date) => void }
>(({ value, onChange }, ref) => {
  const [isOPen, setIsOpen] = React.useState(false);

  return (
    <Popover open={isOPen} onOpenChange={setIsOpen}>
      <PopoverTrigger aria-label="Open date picker">
        <Input
          readOnly
          value={value?.toLocaleDateString() ?? ''}
          placeholder="Pick date"
          aria-label="Pick date"
        />
      </PopoverTrigger>
      <PopoverContent>
        <div ref={ref}>
          <Calendar
            mode="single"
            selected={value ? new Date(value) : undefined}
            onSelect={(date) => {
              onChange(date);
              setIsOpen(false);
            }}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
});

DatePicker.displayName = 'DatePicker';

export default DatePicker;
