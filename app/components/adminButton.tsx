'use client'

import { MenuItem } from "@headlessui/react"
import logOut from "@/firebase/auth/logout"
import { useAuthContext } from '../context/AuthContext'

export default function AdminButton() {
    const { user } = useAuthContext();

    return (
        <>
        {
            !user ? (
            <MenuItem>
                <a
                href="/auth"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                >
                Admin login
                </a>
            </MenuItem>
            ) : (
                <>
            <MenuItem>
                <a
                href="/admin"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                >
                add project
                </a>
            </MenuItem>
            <MenuItem>
                <button
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                onClick={()=>logOut()}
                >
                logout
                </button>
            </MenuItem>
            </>
            )
        }
        </>
    )
}