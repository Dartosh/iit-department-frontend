export interface UserInterface {
  id: number;

  username: string;

  first_name: string | null;

  last_name: string | null;

  date_joined: Date;

  middle_name: string | null;

  first_login: Date | null;

  phone: string | null;

  avatar: string | null;

  bio: string | null;

  github: string | null;

  birthday: Date | null;

  gender: string | null;

  technology: number[] | null;

  profile_views: number | null;

  contacts_number: number | null;
}