export interface Issue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  labels: (Label | Labels2 | Labels3)[];
  state: State;
  locked: boolean;
  assignee?: any;
  assignees: any[];
  milestone?: any;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: any;
  author_association: string;
  active_lock_reason?: any;
  draft?: boolean;
  pull_request?: Pullrequest;
  body: string;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app?: any;
  state_reason?: any;
}

export type State = 'open' | 'closed' | 'pending';

interface Reactions {
  url: string;
  total_count: number;
  '+1': number;
  '-1': number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

interface Pullrequest {
  url: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  merged_at?: any;
}

interface Labels3 {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description?: string;
}

interface Labels2 {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description?: string;
}

interface Label {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description?: any;
}

interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}