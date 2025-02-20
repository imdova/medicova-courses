export type educationAuthority = {
  name: string;
  image: string;
};
export type Exams = {
  id: string;
  image: string;
  title: string;
  category: string;
  authority: educationAuthority;
  qustions: number;
  exam_date: string;
  providers: number;
  price: number;
};
