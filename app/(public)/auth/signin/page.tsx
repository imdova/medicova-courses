'use client';
import Button from "@/components/UI/Buttons/Button";
import { users } from "@/constants/users";
import { User } from "next-auth";
import { signIn } from "next-auth/react";
import Image from "next/image";

const roleColors: Record<User["type"], string> = {
    admin: "bg-red-100 text-red-800",
    instructor: "bg-blue-100 text-blue-800",
    student: "bg-green-100 text-green-800",
};

const UserCardList: React.FC = () => {

    const onSubmit = async (user: User) => {
        try {
            const result = await signIn("credentials", {
                email: user.email,
                password: "user.password",
                redirect: false,
            });
            if (result?.error) {
                console.log(
                    result.error === "CredentialsSignin"
                        ? "Invalid email or password"
                        : "An error occurred during sign in",
                );
            } else {
                window.location.href = "/user-redirect";
            }
        } catch {
            console.log("Failed to sign in");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center" >
            <div className="grid gap-6 sm:grid-cols-2 w-full lg:grid-cols-3 p-4">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="bg-white border border-gray-200 shadow-md rounded-2xl p-4 flex flex-col items-center text-center"
                    >
                        <Image
                            src={user.photo || ""}
                            alt={user.userName || "User"}
                            width={250}
                            height={250}
                            className="w-24 h-24 rounded-full object-cover mb-4"
                        />
                        <h2 className="text-lg font-semibold">
                            {user.firstName} {user.lastName}
                        </h2>
                        <p className="text-sm text-gray-500">@{user.userName}</p>
                        <p className={`mt-2 text-sm px-2 py-1 rounded-full ${roleColors[user.type]}`}>
                            {user.type.toUpperCase()}
                        </p>
                        <div className="mt-3 text-sm text-gray-600">
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>

                        </div>
                        <Button variant="contained" onClick={() => onSubmit(user)} >
                            Sign In
                        </Button>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default UserCardList;