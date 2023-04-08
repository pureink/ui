import { ChevronDown } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DemoTeamMembers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>
          Invite your team members to collaborate.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://avatar.vercel.sh/shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">shadcn</p>
              <p className="text-muted-foreground text-sm">m@example.com</p>
            </div>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Owner{" "}
                <ChevronDown className="text-muted-foreground ml-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0" align="end">
              <Command>
                <CommandInput placeholder="Select new role..." />
                <CommandList>
                  <CommandEmpty>No roles found.</CommandEmpty>
                  <CommandGroup className="p-1.5">
                    <CommandItem className="flex flex-col items-start space-y-1 p-2">
                      <p>Viewer</p>
                      <p className="text-muted-foreground text-sm">
                        Can view and comment.
                      </p>
                    </CommandItem>
                    <CommandItem className="flex flex-col items-start space-y-1 p-2">
                      <p>Developer</p>
                      <p className="text-muted-foreground text-sm">
                        Can view, comment and edit.
                      </p>
                    </CommandItem>
                    <CommandItem className="flex flex-col items-start space-y-1 p-2">
                      <p>Billing</p>
                      <p className="text-muted-foreground text-sm">
                        Can view, comment and manage billing.
                      </p>
                    </CommandItem>
                    <CommandItem className="flex flex-col items-start space-y-1 p-2">
                      <p>Owner</p>
                      <p className="text-muted-foreground text-sm">
                        Admin-level access to all resources.
                      </p>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://avatar.vercel.sh/benoit" />
              <AvatarFallback>BN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">benoit</p>
              <p className="text-muted-foreground text-sm">b@example.com</p>
            </div>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Member{" "}
                <ChevronDown className="text-muted-foreground ml-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0" align="end">
              <Command>
                <CommandInput placeholder="Select new role..." />
                <CommandList>
                  <CommandEmpty>No roles found.</CommandEmpty>
                  <CommandGroup className="p-1.5">
                    <CommandItem className="flex flex-col items-start space-y-1 p-2">
                      <p>Viewer</p>
                      <p className="text-muted-foreground text-sm">
                        Can view and comment.
                      </p>
                    </CommandItem>
                    <CommandItem className="flex flex-col items-start space-y-1 p-2">
                      <p>Developer</p>
                      <p className="text-muted-foreground text-sm">
                        Can view, comment and edit.
                      </p>
                    </CommandItem>
                    <CommandItem className="flex flex-col items-start space-y-1 p-2">
                      <p>Billing</p>
                      <p className="text-muted-foreground text-sm">
                        Can view, comment and manage billing.
                      </p>
                    </CommandItem>
                    <CommandItem className="flex flex-col items-start space-y-1 p-2">
                      <p>Owner</p>
                      <p className="text-muted-foreground text-sm">
                        Admin-level access to all resources.
                      </p>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </CardContent>
    </Card>
  )
}