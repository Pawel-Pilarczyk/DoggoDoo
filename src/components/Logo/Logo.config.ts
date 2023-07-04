import { LogoSize } from './Logo.types';

export const SIZE_CONFIG: Record<
    LogoSize,
    { fontSize: number; iconSize: number }
> = {
    small: { fontSize: 0, iconSize: 24 },
    medium: { fontSize: 24, iconSize: 36 },
    large: { fontSize: 36, iconSize: 42 },
} as const;
