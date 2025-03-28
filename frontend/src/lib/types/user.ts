export interface User {
  id: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface UserProfile extends User {
  full_name?: string;
  avatar_url?: string;
  risk_tolerance?: 'low' | 'medium' | 'high';
  investment_goals?: string[];
} 