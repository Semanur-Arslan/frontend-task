import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import styles from "./profileStyles";
import CustomButton from "@/components/customButton";
import { useLogin } from "@/hooks/useLogin";
import ProfileImagePicker from "@/components/profileImage";
import { companyDetails, bankDetails } from "@/constants/data";
import DetailsList from "@/components/detailsList";
import SectionTitle from "@/components/sectionTitle";

const Profile: React.FC = () => {
  const { logout } = useLogin();

  const handleLogout = () => {
    logout();
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.wrapper}>
            <SectionTitle title="Company Details" />
            <View style={styles.contentWrapper}>
              <ProfileImagePicker />
              <DetailsList data={companyDetails} />
            </View>
          </View>
          <View style={styles.wrapper}>
            <SectionTitle title="Bank Details" editable />
            <DetailsList data={bankDetails} />
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <CustomButton
            title="Log out"
            onPress={handleLogout}
            backgroundColor="orange"
            icon="logout"
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Profile;
