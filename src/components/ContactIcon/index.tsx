import { Box, Stack, Text, ThemeIcon } from "@mantine/core"
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons'
import { contactIconStyles, ContactIconVariant } from "./styles"

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    icon: React.FC<any>
    title: React.ReactNode
    description: React.ReactNode
    variant?: ContactIconVariant
}

export function ContactIcon({
    icon: Icon,
    title,
    description,
    variant = 'gradient',
    className,
    ...others
}: ContactIconProps) {
    const { classes, cx } = contactIconStyles({ variant });
    return (
        <div className={cx(classes.wrapper, className)} {...others}>
            {variant === 'gradient' ? (
                <ThemeIcon size={40} radius="md" className={classes.icon}>
                    <Icon size={24} />
                </ThemeIcon>
            ) : (
                <Box mr="md">
                    <Icon size={24} />
                </Box>
            )}

            <div>
                <Text size="xs" className={classes.title}>{title}</Text>
                <Text className={classes.description}>{description}</Text>
            </div>
        </div>
    )
}

interface ContactIconsListProps {
    data?: ContactIconProps[];
    variant?: ContactIconVariant;
}

const MOCKDATA = [
    { title: 'Email', description: 'sales@salckbear.com', icon: IconAt },
    { title: 'Phone', description: '+91 7757 888 393', icon: IconPhone },
    { title: 'Address', description: 'Block 2.14, 91 Springboard, Pune', icon: IconMapPin },
    { title: 'Working hours', description: '8 a.m. – 11 p.m.', icon: IconSun },
];

export default function ContactIconsList({ data = MOCKDATA, variant }: ContactIconsListProps) {
    const items = data.map((item, index) => <ContactIcon key={index} variant={variant} {...item} />);
    return <Stack>{items}</Stack>;
}