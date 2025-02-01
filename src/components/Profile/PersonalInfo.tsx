import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function PersonalInfo({ name, email, img }) {
  return (
    <Card className="lg:col-span-2 w-full shadow-xl bg-white dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Personal Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
          <Avatar className="w-24 h-24 border-4 border-primary">
            <AvatarImage src={img} alt="John Doe" />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {name}
            </h2>
            <p className="text-muted-foreground">{email}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label className="text-muted-foreground">Full Name</Label>
            <p className="font-medium">{name}</p>
          </div>
          <div className="grid gap-2">
            <Label className="text-muted-foreground">Email Address</Label>
            <p className="font-medium">{email}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
