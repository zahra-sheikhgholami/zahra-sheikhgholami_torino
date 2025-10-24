"use client";

import { useUserProfile } from "@/src/hooks/useUserProfile";
import AccountInfo from "@/src/components/modules/AccountInfo";
import PersonalInfo from "@/src/components/modules/PersonalInfo";
import BankInfo from "@/src/components/modules/BankInfo";
import Loader from "@/src/components/modules/Loader";
import SkeletonProfile from "@/src/components/skeletons/SkeletonProfile";

function ProfilePage() {
  const { data: user = null, isPending } = useUserProfile();

  if (isPending && !user) {
    return (
      <>
        <SkeletonProfile />;
        <Loader />;
      </>
    );
  }

  return (
    <div>
      {user && (
        <>
          <AccountInfo user={user} />
          <PersonalInfo {...user} />
          <BankInfo payment={user?.payment} />
        </>
      )}
    </div>
  );
}
export default ProfilePage;
