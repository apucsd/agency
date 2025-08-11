import { cn } from '@/lib/utils';

//======================================
export const ShimmerButton = ({ ...props }) => {
  return (
    <div className=" relative overflow-hidden rounded-full dark:bg-zinc-900 bg-white shadow border dark:border-zinc-800 group border-zinc-400 p-0.5">
      <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite_reverse] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#09090B_7%)] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#fff_5%)] group-hover:bg-none" />
      <button
       style={{
        boxShadow: '0 0 2px #1DCDF5, 0 0 5px #195AFE, 0 0 2px #195AFE, 0 0 60px #195AFE',
  }}
        {...props}
        className={cn(
          'h-10 px-2 cursor-pointer rounded-full font-medium text-zinc-800 dark:text-zinc-200 backdrop-blur-xl bg-zinc-50 dark:bg-zinc-900',
          props.className,
        )}
      />
    </div>
  );
};
