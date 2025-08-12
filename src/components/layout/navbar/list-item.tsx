'use client';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type TListItemProps = {
  item: {
    title: string;
    href: string;
    description: string;
    icon?: React.ReactNode;
    image?: string;
  };
  onClick?: () => void;
};

const ListItem = ({ item }: TListItemProps) => {
  return (
    <li className='list-none'>
      <NavigationMenuLink asChild>
        <Link
          href={item.href}
          className={cn(
            'group block rounded-xl overflow-hidden border bg-card'
          )}
        >
          <div className="relative">
            {item.image && (
              <div className="relative h-32 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                {item.icon && (
                  <div className="absolute top-3 right-3 w-9 h-9 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-md">
                    {item.icon}
                  </div>
                )}
              </div>
            )}

            <div className="p-4 space-y-1">
              <h3 className="text-base text-primary font-medium transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 leading-snug">
                {item.description}
              </p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default ListItem;
