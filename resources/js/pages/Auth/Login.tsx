import * as React from 'react';

import RenderField from '@/components/form/RenderField';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from '@inertiajs/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// login schema
const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email address'),

  password: z.string().min(1, 'Password is required'),
});

// login form data
type LoginFormData = z.infer<typeof loginSchema>;

// login form fields
const fields = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
];

export default function Login() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // login form instance
  const form = useForm<LoginFormData>({
    mode: 'onBlur',
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // submit login form data
  const onSubmit = (data: LoginFormData) => {
    router.post(route('login'), data, {
      onStart: () => setIsSubmitting(true),
      onFinish: () => setIsSubmitting(false),
    });
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-sushi-50/5">
      <div className="w-full max-w-[350px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="relative flex w-full flex-col gap-4 overflow-hidden rounded-xl border bg-background to-sushi-700 p-6"
          >
            <div className="mix-blend pointer-event-none absolute -left-1/2 -top-28 top-0 h-96 w-full -translate-y-1/2 rounded-full bg-sushi-400 blur-3xl" />

            <div className="sticky inset-x-0 z-10 flex w-full flex-col gap-4">
              <img src="/logo.png" alt="" width={200} />
              <h1 className="text-3xl font-bold"> Login </h1>
            </div>

            {fields.map((field, index) => (
              <RenderField key={index} {...field} />
            ))}

            <Button type="submit">
              {isSubmitting ? 'Please wait...' : 'Login'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
