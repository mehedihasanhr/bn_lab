import RenderField from '@/components/form/RenderField';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3;
const ACCEPTED_FILE_TYPES = [
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/webp',
];

// inventory from schema
const inventoryFormSchema = z.object({
  image: z
    .any()
    .optional()
    .refine((file) => {
      return !file || file.size <= MAX_UPLOAD_SIZE;
    }, 'File size must be less than 3MB')
    .refine((file) => {
      return !file || ACCEPTED_FILE_TYPES.includes(file.type);
    }, 'File must be a PNG,JPEG,JPG,WEBP'),

  name: z.string().min(1, 'Name is required'),
  dosageForm: z.enum(['tablet', 'capsule', 'syrup']),
  strength: z.string().min(1, 'Strength is required'),
  batch: z.string().optional(),
  exp: z.date({
    required_error: 'Expiry date is required',
    invalid_type_error: 'This field must be a date',
  }),
  mfg: z.date({
    required_error: 'Mfg date is required',
    invalid_type_error: 'This field must be a date',
  }),
  price: z.number().min(1, 'Price is required'),
  priceUnit: z.string().min(1, 'Price unit is required'),
  discount: z.number().min(0, 'Discount is required'),
  discountType: z.enum(['percentage', 'amount']),
  description: z.string().min(1, 'Description is required'),
});

type InventoryFormData = z.infer<typeof inventoryFormSchema>;

// field type
type Field = {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  options?: {
    label: string;
    value: string;
  }[];
};

// form field config
const fields: Field[] = [
  {
    name: 'image',
    type: 'file',
    label: 'Product Image',
    placeholder: 'Enter product image',
  },
  {
    name: 'name',
    type: 'text',
    label: 'Product name',
    placeholder: 'Enter product name',
  },
  {
    name: 'dosageForm',
    type: 'radio',
    label: 'Dosage form',
    options: [
      { label: 'Tablet', value: 'tablet' },
      { label: 'Capsule', value: 'capsule' },
      { label: 'Syrup', value: 'syrup' },
    ],
  },

  {
    name: 'strength',
    type: 'text',
    label: 'Strength',
    placeholder: 'Dosage strength (e.g., 500mg, 10mg/ml).',
  },

  {
    name: 'batch',
    type: 'text',
    label: 'Batch',
    placeholder: 'Batch number',
    required: false,
  },

  {
    name: 'price',
    type: 'number',
    label: 'Price',
    placeholder: 'Enter product price',
  },
  {
    name: 'priceUnit',
    type: 'text',
    label: 'Unit',
    placeholder: "price unit (e.g., 'pcs', 'unit', 'box')",
  },
  {
    name: 'discount',
    type: 'number',
    label: 'Discount',
    placeholder: 'Enter discount',
    required: false,
  },
  {
    name: 'discountType',
    type: 'radio',
    label: 'Discount type',
    placeholder: 'Enter discount',
    required: false,
    options: [
      { label: 'Percentage', value: 'percentage' },
      { label: 'Amount', value: 'amount' },
    ],
  },

  {
    name: 'mfg',
    type: 'date',
    label: 'Mfg date',
    placeholder: 'Mfg date',
  },

  {
    name: 'exp',
    type: 'date',
    label: 'Expiry date',
    placeholder: 'Expiry date',
  },
  {
    name: 'description',
    type: 'rich-text',
    label: 'Description',
    placeholder: 'Enter description',
  },
];

// Render add medicine page
export default function AddMedicines() {
  const form = useForm<InventoryFormData>({
    resolver: zodResolver(inventoryFormSchema),
    defaultValues: {
      image: '',
      name: '',
      batch: '',
      dosageForm: undefined,
      strength: '',
      price: 0,
      priceUnit: '',
      discount: 0,
      discountType: 'amount',
      description: '',
    },
  });

  const onSubmit = (data: InventoryFormData) => {
    console.log(data);
  };

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button>
          <Plus /> Add medicine
        </Button>
      </DrawerTrigger>

      <DrawerContent className="inset-x-auto inset-y-0 right-0 mt-0 flex h-screen w-full max-w-[500px] flex-col rounded-none">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex h-full flex-1 flex-col"
          >
            <DrawerHeader>
              <DrawerTitle className="text-2xl font-semibold">
                Add New Inventory
              </DrawerTitle>
              <DrawerDescription className="hidden" />
            </DrawerHeader>

            <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-6">
              {fields.map((field) => (
                <React.Fragment key={field.name}>
                  <RenderField {...field} />
                </React.Fragment>
              ))}
            </div>

            <DrawerFooter className="flex flex-row items-center gap-4 border-t">
              <Button className="flex-1"> Create </Button>
            </DrawerFooter>
          </form>
        </Form>
      </DrawerContent>
    </Drawer>
  );
}
