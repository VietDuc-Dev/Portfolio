// ========== Verification ==========
export interface IVerification {
  object: string;
  status: "verified" | "unverified" | "pending" | "expired";
  strategy: string;
  attempts: number | null;
  expire_at: number | null;
}

// ========== Linked to (OAuth) ==========
export interface LinkedTo {
  type: string;
  id: string;
}

// ========== Email Address ==========
export interface IEmailAddress {
  id: string;
  object: "email_address";
  email_address: string;
  reserved: boolean;
  verification: IVerification;
  linked_to: LinkedTo[];
  matches_sso_connection: boolean;
  created_at: number;
  updated_at: number;
}

// ========== External Account (Google, GitHub...) ==========
export interface IExternalAccount {
  object: "external_account";
  id: string;
  provider: string;
  identification_id: string;
  provider_user_id: string;
  approved_scopes: string;
  email_address: string;
  first_name: string;
  last_name: string;
  avatar_url: string;
  image_url: string;
  username: string;
  phone_number: string;
  public_metadata: Record<string, unknown>;
  label: string | null;
  created_at: number;
  updated_at: number;
  verification: IVerification;
}

// ========== Main User ==========
export interface IClerkUser {
  id: string;
  object: "user";

  username: string | null;
  first_name: string | null;
  last_name: string | null;
  locale: string | null;

  image_url: string;
  profile_image_url: string;
  has_image: boolean;

  primary_email_address_id: string | null;
  primary_phone_number_id: string | null;
  primary_web3_wallet_id: string | null;

  password_enabled: boolean;
  two_factor_enabled: boolean;
  totp_enabled: boolean;
  backup_code_enabled: boolean;

  email_addresses: IEmailAddress[];

  external_accounts: IExternalAccount[];

  public_metadata: Record<string, unknown>;
  private_metadata: Record<string, unknown>;
  unsafe_metadata: Record<string, unknown>;
  external_id: string | null;

  last_sign_in_at: number | null;
  last_active_at: number | null;

  created_at: number;
  updated_at: number;

  password_last_updated_at: number | null;

  banned: boolean;
  locked: boolean;
  lockout_expires_in_seconds: number | null;
  verification_attempts_remaining: number;

  mfa_enabled_at: number | null;
  mfa_disabled_at: number | null;

  legal_accepted_at: number | null;
  requires_password_reset: boolean;

  delete_self_enabled: boolean;
  bypass_client_trust: boolean;
  create_organization_enabled: boolean;
}
