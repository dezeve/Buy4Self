import React from "react";
import UserProfileLayout from "../layout/UserProfileLayout";
import OrderTable from "../components/OrderTable";

const OrderHistory = () => {
    return (
        <UserProfileLayout>
            <OrderTable />
        </UserProfileLayout>
    );
}

export default OrderHistory;
