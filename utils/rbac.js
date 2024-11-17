export const permissions = [
    {
        role: "user",
        actions: [
            "get_profile",
            "update_profile",
            "get_educational_by_id",
            "get_educationals"
        ]
    },
    {
        role: "counselor",
        actions: [
            "get_profile",
            "update_profile",
            "add_educational",
            "update_educational_by_id",
            "get_educational_by_id",
            "get_educationals",
            "delete_educational"
        ]
    },

    {
        role: "adminstrator",
        actions: [
            "get_profile",
            "update_profile",
            "add_educational",
            "update_educational_by_id",
            "get_educational_by_id",
            "get_educationals",
            "delete_educational",
            "get_moods",
            "get_assessments"
        ]
    }
]