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
            "add_educational",
            "update_educational",
            "get_educational_by_id",
            "get_educationals",
            "delete_educational"
        ]
    }
]