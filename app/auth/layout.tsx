import {Box} from "@mui/material";

export default function AuthLayout({
                                       children
                                   }: {
    childre: React.ReactNode;
}) {
    return (
        <Box className="h-screen flex items-center justify-center">
            {children}
        </Box>
    )
}