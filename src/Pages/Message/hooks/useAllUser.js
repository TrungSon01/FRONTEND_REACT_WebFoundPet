import { useState, useEffect } from "react";
import { BASE_URL_NEST_JS } from "../../../apis/NestJS_api/config";

export function useAllUsers(currentUserId) {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${BASE_URL_NEST_JS}/api/user`);
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        const filteredUsers = data.filter(
          (user) => user.user_id !== currentUserId
        );
        setAllUsers(filteredUsers);
      } catch (error) {
        console.error("❌ Lỗi khi lấy danh sách users:", error);
      }
    };

    if (currentUserId) fetchUsers();
  }, [currentUserId]);

  return allUsers;
}
