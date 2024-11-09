export const permissions = [
    {
        role: "user",
        actions: [
            "get_profile",
            "update_profile",
            "get_advert_by_id",
            "get_adverts"
        ]
    },
    {
        role: "counselor",
        actions: [
            "get_profile",
            "update_profile",
            "add_advert",
            "update_advert",
            "get_advert_by_id",
            "get_adverts",
            "delete_advert"
        ]
    }
]