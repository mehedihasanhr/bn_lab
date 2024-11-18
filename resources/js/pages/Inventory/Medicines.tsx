import AddMedicines from '@/components/features/Inventory/AddMedicine';
import InventoryTable from '@/components/features/Inventory/InventoryTable';
import { Separator } from '@/components/ui/separator';
import AppLayout from '@/layouts/AppLayout';
import { Head, Link, usePage } from '@inertiajs/react';

const categories = [
  {
    title: 'Medicines',
    icon: '/icons/medicine.png',
    link: '/inventories/medicines',
  },

  {
    title: 'Matarials',
    icon: '/icons/material.png',
    link: '#',
  },
];

export default function Inventory() {
  const page = usePage();
  console.log({ page });

  return (
    <AppLayout>
      <Head title="" />
      <div>
        <div className="categories-grid mb-6 gap-4">
          {categories.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              data-active={page.url === item.link}
              className="flex aspect-square h-full w-full items-center gap-2 rounded-xl border border-sushi-200 p-4 hover:bg-sushi-50 active:bg-sushi-100 data-[active=true]:bg-sushi-100 data-[active=true]:text-sushi-700"
            >
              <div className="flex w-full flex-col items-center gap-2">
                <div className="aspect-square h-full w-full max-w-[70px]">
                  <img
                    src={item.icon}
                    alt=""
                    width={100}
                    height={100}
                    className="h-full w-full"
                  />
                </div>
                <h6 className="text-center font-medium leading-5">
                  {item.title}
                </h6>
              </div>
            </Link>
          ))}
        </div>

        <Separator className="mb-6" />
        <div>
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="text-xl font-bold"> Medicines </h3>
            <AddMedicines />
          </div>
          <InventoryTable />
        </div>
      </div>
    </AppLayout>
  );
}
