export interface UpdateUserInterface {
    username: string;
  
    first_name?: string;
  
    last_name?: string;
  
    date_joined?: Date;
  
    middle_name?: string;
  
    first_login?: Date;
  
    phone: string;
  
    bio?: string;
  
    github?: string;
  
    birthday?: Date | null;
  
    gender?: string | null;
  
    technology: string[] | null;
  }