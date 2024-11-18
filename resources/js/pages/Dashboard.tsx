import { categories } from '@/constants/categories';
import AppLayout from '@/layouts/AppLayout';
import { Link } from '@inertiajs/react';

export default function Dashboard() {
  return (
    <AppLayout>
      <div className="flex items-center justify-center">
        <div className="categories-container w-full">
          <div className="categories-grid">
            {categories.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="flex aspect-square h-full w-full items-center gap-2 rounded-xl border border-sushi-200 p-4 hover:bg-sushi-50 active:bg-sushi-100"
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
        </div>
      </div>
    </AppLayout>
  );
}
