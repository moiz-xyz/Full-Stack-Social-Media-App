// src/components/sidebar.tsx
import logo from "../../../public/logo.svg";
import { Button } from "@/components/ui/button"; 
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";


// Sidebar menu items
const items = [
  {
    imgURL: "../../../public/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "../../../public/wallpaper.svg",
    route: "/explore",
    label: "Explore",
  },
  {
    imgURL: "../../../public/people.svg",
    route: "/all-users",
    label: "People",
  },
  {
    imgURL: "../../../public/bookmark.svg",
    route: "/saved",
    label: "Saved",
  },
  {
    imgURL: "../../../public/gallery-add.svg",
    route: "/create-post",
    label: "Create Post",
  },
];

// Single, self‑contained sidebar component
export default function SideBar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="h-12">
              <img src={logo} alt="Logo" className="w-37" />{" "}
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild>
                       <Button
                        variant="ghost"
                       className=""
                        onClick={() => (window.location.href = item.imgURL)}
                      >
                        <img src={item.imgURL} alt={item.label} className="w-5 h-5" />
                        <span>{item.label}</span>
                      </Button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
