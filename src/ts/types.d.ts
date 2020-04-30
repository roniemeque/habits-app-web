interface User {
  _id: any;
  name: string;
  email: string;
}

interface Goal {
  _id: any;
  title: string;
  icon: string;
  owner: User;
  length: number;
  daysCompleted: string[];
  status: string;
}
