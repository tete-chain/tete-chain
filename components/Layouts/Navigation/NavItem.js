import { Flex, Icon } from "@chakra-ui/react";
import { Link } from "@saas-ui/react";

export default function NavItem({ icon, href = "#", children, ...rest }) {
    return (
        <Link href={href}>
            <Flex
                align="center"
                px="4"
                pl="4"
                py="3"
                cursor="pointer"
                color={"white"}
                _hover={{
                    bg: "tete.hover",
                    fontWeight: "bold",
                }}
                role="group"
                transition=".15s ease"
                {...rest}
            >
                {icon && <Icon mx="2" boxSize="4" as={icon} />}
                {children}
            </Flex>
        </Link>
    );
}
