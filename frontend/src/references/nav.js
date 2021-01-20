module.exports =
[
    // {
    //     key: 'documentation_landing',
    //     label: 'Introduction',
    //     icon: 'fa fa-question',
    //     route: 'documentation_landing',
    // },
    {
        key: 'landing',
        label: 'Basic Info',
        icon: 'fa fa-home',
        sub:
        [
            // { label: 'Login', route: 'documentation_login' },
            // { label: 'Registration', route: 'documentation_registration' },
            // { label: 'Web3', route: 'documentation_web3' },
            { label: 'Add New', route: 'documentation_create'},
            { label: 'Manage Records', route: 'documentation_crud'},

        ]
    },
    // {
    //     key: 'user',
    //     label: 'User',
    //     icon: 'fa fa-user',
    //     sub:
    //     [
    //         { label: 'Wallet', route: 'documentation_login' },
    //     ]
    // },
]