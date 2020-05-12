interface User {
  id: any;
  name: string;
  email: string;
}

interface Goal {
  id: any;
  title: string;
  icon: string;
  owner: User;
  daysLength: number;
  daysCompleted: string[];
  status: string;
}
