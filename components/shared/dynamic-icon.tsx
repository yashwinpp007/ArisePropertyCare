import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";

type IconName = keyof typeof Icons;

interface DynamicIconProps extends LucideProps {
  name: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[name as IconName] ?? Icons.Sparkles;
  return <Icon {...props} />;
}
