import { tv } from 'tailwind-variants';

const vars = {
  base: [
    '[--tw-ring-color:var(--gray-4)]',
    '[--radix-toast-color:white]',
    '[--radix-toast-bg:var(--gray-2)]',
    '[--radix-toast-border-color:var(--gray-6)]',
    '[--radix-toast-action-color:var(--gray-11)]',
  ],
  info: [
    '[--tw-ring-color:var(--blue-4)]',
    '[--radix-toast-color:white]',
    '[--radix-toast-bg:var(--blue-2)]',
    '[--radix-toast-border-color:var(--blue-6)]',
    '[--radix-toast-action-color:var(--blue-11)]',
  ],
  warning: [
    '[--tw-ring-color:var(--yellow-4)]',
    '[--radix-toast-color:white]',
    '[--radix-toast-bg:var(--yellow-2)]',
    '[--radix-toast-border-color:var(--yellow-6)]',
    '[--radix-toast-action-color:var(--yellow-11)]',
  ],
  success: [
    '[--tw-ring-color:var(--green-4)]',
    '[--radix-toast-color:white]',
    '[--radix-toast-bg:var(--green-2)]',
    '[--radix-toast-border-color:var(--green-6)]',
    '[--radix-toast-action-color:var(--green-11)]',
  ],
  error: [
    '[--tw-ring-color:var(--crimson-4)]',
    '[--radix-toast-color:white]',
    '[--radix-toast-bg:var(--crimson-2)]',
    '[--radix-toast-border-color:var(--crimson-6)]',
    '[--radix-toast-action-color:var(--crimson-11)]',
  ],
};

export const styles = tv({
  slots: {
    viewport: [
      'fixed top-0 z-50 flex flex-col-reverse p-4 sm:bottom-0 sm:right-0',
      'sm:top-auto sm:flex-col',
    ],
    toast: [
      'group pointer-events-auto relative flex w-full items-center justify-between overflow-hidden rounded-md',
      'p-4 shadow-lg transition-all outline-none focus-visible:ring-2 not-first:mt-4',
      'md:min-w-[var(--radix-toast-width)]',
      'data-[swipe=end]:transition-none',
      'data-[swipe=end]:translate-x-[var(--radix-toast-swipe-move-x)]',
      'data-[state=open]:animate-in',
      'data-[state=open]:slide-in-from-top-full',
      'sm:data-[state=open]:slide-in-from-bottom-full',
      'data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-80',
      'sm:data-[state=closed]:slide-out-from-bottom-full',
      'bg-[var(--radix-toast-bg)]',
      'border-[var(--radix-toast-border-color)]',
      'text-[var(--radix-toast-color)]',
      'fuel-[Icon]:text-[var(--radix-toast-action-color)]',
    ],
    action: [
      'inline-flex h-7 shrink-0 items-center justify-center rounded-md border border-border',
      'bg-transparent ml-4 px-3 text-sm font-medium transition-colors focus:outline-none',
      'disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2',
      'text-[var(--radix-toast-action-color)]',
      'border-[var(--radix-toast-border-color)]',
      'hover:text-[var(--radix-toast-color)]',
    ],
    close: [
      'absolute focus-visible:ring-2 top-3 right-3 opacity-0 group-hover:opacity-100',
      'fuel-[Icon]:text-[var(--radix-toast-action-color)]',
      'fuel-[Icon]:opacity-50',
      'hover:fuel-[Icon]:opacity-100',
    ],
    title: ['text-sm font-semibold [&+div]:text-sm'],
    description: 'text-sm opacity-90 text-[var(--radix-toast-action-color)]',
  },
  variants: {
    variant: {
      base: {
        toast: vars.base,
        toastIcon: vars.base,
      },
      info: {
        toast: vars.info,
        toastIcon: vars.info,
      },
      warning: {
        toast: vars.warning,
        toastIcon: vars.warning,
      },
      success: {
        toast: vars.success,
        toastIcon: vars.success,
      },
      error: {
        toast: vars.error,
        toastIcon: vars.error,
      },
    },
    hasDescription: {
      true: {},
    },
  },
});
