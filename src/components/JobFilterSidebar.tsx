import { filterJobs, getDistinctLocation } from "@/database/action/job"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Checkbox } from "./ui/checkbox"
import { Button } from "./ui/button"
import { jobTypes } from "@/lib/job-types"

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
                        <Label htmlFor="location"> Type</Label>
                        <Select name='type' defaultValue="all">
                            <SelectTrigger className="">
                                <SelectValue placeholder="All Type" />
                            </SelectTrigger>
                            <SelectContent>
                                {['all', ...jobTypes].map((type, i) => (
                                    <SelectItem key={i} value={type}>{type === 'all' ? "All Type" : type}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="location">Location</Label>
                        <Select name='location' defaultValue="all">
                            <SelectTrigger className="">
                                <SelectValue placeholder="All Location" />
                            </SelectTrigger>
                            <SelectContent>
                                {distinctLocation.map((location, i) => (
                                    <SelectItem key={i} value={location}>{location === 'all' ? "All Location" : location}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox name="remote" id='remote' />
                        <Label htmlFor="remote" >Remote Jobs</Label>
                    </div>
                    <Button type='submit' className="w-full">Filter Jobs</Button>
                </div>
            </form>
        </aside>
    )
}
export default JobFilterSidebar