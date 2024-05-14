import { filterJobs, getDistinctLocation } from "@/database/action/job"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

interface Props { }
const JobFilterSidebar = async (props: Props) => {
    const distinctLocation = await getDistinctLocation();

    return (
        <aside className="md:w-[260px] p-4 sticky top-0 bg-background border rounded h-fit">
            <form action={filterJobs}>
                <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="q">Search</Label>
                        <Input id='q' name='q' placeholder="Title, Company, etc" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="location">Location</Label>
                        <Select defaultValue="">
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="All Location" />
                            </SelectTrigger>
                            <SelectContent>
                                {/* {distinctLocation.map((location, i) => (
                                    <SelectItem key={i} value={location}>All Location</SelectItem>

                                ))} */}

                                {/* <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem> */}
                            </SelectContent>
                        </Select>

                    </div>
                </div>
            </form>
            Sidebar
        </aside>
    )
}
export default JobFilterSidebar