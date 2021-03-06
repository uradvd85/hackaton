({
    block : 'page',
    title : 'bem-components: islands theme',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_islands.css' },
        { elem : 'js', url : '_islands.js' }
    ],
    content : [
        { tag : 'h2', content : 'islands theme' },

        {
            block : 'table',
            attrs : { style : 'table-layout: fixed; width: 600px' },
            content : [
                {
                    elem : 'row',
                    content : [
                        { elem : 'title', content : 'size s' },
                        { elem : 'title', content : 'size m' },
                        { elem : 'title', content : 'size l' },
                        { elem : 'title', content : 'size xl' }
                    ]
                },
                {
                    elem : 'row',
                    content : [
                        { elem : 'cell', size : 's' },
                        { elem : 'cell', size : 'm' },
                        { elem : 'cell', size : 'l' },
                        { elem : 'cell', size : 'xl' }
                    ].map(function(cell) {
                        cell.attrs = { style : 'width: 25%' };
                        cell.content = [
                            {
                                block : 'menu',
                                mods : { theme : 'islands', size : cell.size },
                                content : [
                                    {
                                        block : 'menu-item',
                                        content : 'New'
                                    },
                                    {
                                        block : 'menu-item',
                                        mods : { disabled : true },
                                        content : 'Open Recent'
                                    },
                                    {
                                        elem : 'group',
                                        title : 'Save',
                                        content : [
                                            {
                                                block : 'menu-item',
                                                content : 'Save as...'
                                            },
                                            {
                                                block : 'menu-item',
                                                content : 'Export'
                                            }
                                        ]
                                    },
                                    {
                                        block : 'menu-item',
                                        content : 'Close'
                                    }
                                ]
                            },
                            { tag : 'br' },
                            {
                                block : 'menu',
                                mods : { mode : 'check', theme : 'islands', size : cell.size },
                                content : [
                                    {
                                        elem : 'group',
                                        title : 'Automate',
                                        content : [
                                            {
                                                block : 'menu-item',
                                                content : 'Batch'
                                            },
                                            {
                                                block : 'menu-item',
                                                content : 'Create Droplet'
                                            }
                                        ]
                                    },
                                    {
                                        elem : 'group',
                                        content : [
                                            {
                                                block : 'menu-item',
                                                mods : { checked : true },
                                                content : [
                                                    { block : 'icon', mods : { social : 'twitter' } },
                                                    'Twitter'
                                                ]
                                            },
                                            {
                                                block : 'menu-item',
                                                content : [
                                                    { block : 'icon', mods : { social : 'vk' } },
                                                    'VK'
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ];
                        return cell;
                    })
                }
            ]
        },

        { tag : 'br' },

        {
            block : 'line',
            mods : { size : 's' },
            content : [
                'size s (24px height) ',
                {
                    block : 'input',
                    mods : { theme : 'islands', size : 's', 'has-clear' : true },
                    val : 'value',
                    placeholder : 'placeholder'
                },
                ' ',
                {
                    block : 'button',
                    mods : { theme : 'islands', size : 's' },
                    text : 'button'
                },
                ' ',
                {
                    block : 'button',
                    mods : { theme : 'islands', size : 's' },
                    text : 'button',
                    icon : { block : 'icon', mods : { action : 'download' } }
                },
                ' ',
                {
                    block : 'radio-group',
                    mods : { theme : 'islands', size : 's', type : 'button' },
                    name : 'radio-sizes-s',
                    options : [
                        { val : 1, text : 'first' },
                        { val : 2, text : 'second', checked : true }
                    ]
                },
                ' ',
                {
                    block : 'checkbox',
                    mods : { theme : 'islands', size : 's', type : 'button' },
                    val : 1,
                    text : 'check'
                },
                ' ',
                {
                    block : 'dropdown',
                    mods : { switcher : 'button', theme : 'islands', size : 's' },
                    switcher : 'dropdown',
                    popup : { block : 'popup', mods : { theme : 'islands' }, content : 'popup' }
                },
                ' ',
                {
                    block : 'select',
                    mods : { mode : 'radio-check', theme : 'islands', size : 's' },
                    name : 'select',
                    text : 'first',
                    options : [
                        { val : 1, text : 'first', checked: true },
                        { val : 2, text : 'second' }
                    ]
                },
                ' ',
                {
                    block : 'spin',
                    mods : { theme : 'islands', size : 's', visible : true }
                }
            ]
        },

        { tag : 'br' },

        {
            block : 'line',
            mods : { size : 'm' },
            content : [
                'size m (28px height) ',
                {
                    block : 'input',
                    mods : { theme : 'islands', size : 'm', 'has-clear' : true },
                    val : 'value',
                    placeholder : 'placeholder'
                },
                ' ',
                {
                    block : 'button',
                    mods : { theme : 'islands', size : 'm' },
                    text : 'button'
                },
                ' ',
                {
                    block : 'button',
                    mods : { theme : 'islands', size : 'm' },
                    text : 'button',
                    icon : { block : 'icon', mods : { action : 'download' } }
                },
                ' ',
                {
                    block : 'radio-group',
                    mods : { theme : 'islands', size : 'm', type : 'button' },
                    name : 'radio-sizes-m',
                    options : [
                        { val : 1, text : 'first' },
                        { val : 2, text : 'second', checked : true }
                    ]
                },
                ' ',
                {
                    block : 'radio',
                    mods : { theme : 'islands', size : 'm', checked : true },
                    val : 1,
                    text : 'radio'
                },
                ' ',
                {
                    block : 'checkbox',
                    mods : { theme : 'islands', size : 'm', checked : true },
                    val : 1,
                    text : 'check'
                },
                ' ',
                {
                    block : 'checkbox',
                    mods : { theme : 'islands', size : 'm', type : 'button', checked : true },
                    val : 1,
                    text : 'check'
                },
                ' ',
                {
                    block : 'dropdown',
                    mods : { switcher : 'button', theme : 'islands', size : 'm' },
                    switcher : 'dropdown',
                    popup : { block : 'popup', mods : { theme : 'islands' }, content : 'popup' }
                },
                ' ',
                {
                    block : 'select',
                    mods : { mode : 'radio-check', theme : 'islands', size : 'm' },
                    name : 'select',
                    text : 'first',
                    options : [
                        { val : 1, text : 'first', checked: true },
                        { val : 2, text : 'second' }
                    ]
                },
                ' ',
                {
                    block : 'spin',
                    mods : { theme : 'islands', size : 'm', visible : true }
                }
            ]
        },

        { tag : 'br' },

        {
            block : 'line',
            mods : { size : 'l' },
            content : [
                'size l (32px height) ',
                {
                    block : 'input',
                    mods : { theme : 'islands', size : 'l', 'has-clear' : true },
                    val : 'value',
                    placeholder : 'placeholder'
                },
                ' ',
                {
                    block : 'button',
                    mods : { theme : 'islands', size : 'l' },
                    text : 'button'
                },
                ' ',
                {
                    block : 'button',
                    mods : { theme : 'islands', size : 'l' },
                    text : 'button',
                    icon : { block : 'icon', mods : { action : 'download' } }
                },
                ' ',
                {
                    block : 'radio-group',
                    mods : { theme : 'islands', size : 'l', type : 'button' },
                    name : 'radio-sizes-l',
                    options : [
                        { val : 1, text : 'first' },
                        { val : 2, text : 'second', checked : true }
                    ]
                },
                ' ',
                {
                    block : 'radio',
                    mods : { theme : 'islands', size : 'l', checked : true },
                    val : 1,
                    text : 'radio'
                },
                ' ',
                {
                    block : 'checkbox',
                    mods : { theme : 'islands', size : 'l', checked : true },
                    val : 1,
                    text : 'check'
                },
                ' ',
                {
                    block : 'checkbox',
                    mods : { theme : 'islands', size : 'l', type : 'button' },
                    val : 1,
                    text : 'check'
                },
                ' ',
                {
                    block : 'dropdown',
                    mods : { switcher : 'button', theme : 'islands', size : 'l' },
                    switcher : 'dropdown',
                    popup : { block : 'popup', mods : { theme : 'islands' }, content : 'popup' }
                },
                ' ',
                {
                    block : 'select',
                    mods : { mode : 'radio-check', theme : 'islands', size : 'l' },
                    name : 'select',
                    text : 'first',
                    options : [
                        { val : 1, text : 'first', checked: true },
                        { val : 2, text : 'second' }
                    ]
                },
                ' ',
                {
                    block : 'spin',
                    mods : { theme : 'islands', size : 'l', visible : true }
                }
            ]
        },

        { tag : 'br' },

        {
            block : 'line',
            mods : { size : 'xl' },
            content : [
                'size xl (38px height) ',
                {
                    block : 'input',
                    mods : { theme : 'islands', size : 'xl', 'has-clear' : true },
                    val : 'value',
                    placeholder : 'placeholder'
                },
                ' ',
                {
                    block : 'button',
                    mods : { theme : 'islands', size : 'xl' },
                    text : 'button'
                },
                ' ',
                {
                    block : 'button',
                    mods : { theme : 'islands', size : 'xl' },
                    text : 'button',
                    icon : { block : 'icon', mods : { action : 'download' } }
                },
                ' ',
                {
                    block : 'radio-group',
                    mods : { theme : 'islands', size : 'xl', type : 'button' },
                    name : 'radio-sizes-xl',
                    options : [
                        { val : 1, text : 'first' },
                        { val : 2, text : 'second', checked : true }
                    ]
                },
                ' ',
                {
                    block : 'checkbox',
                    mods : { theme : 'islands', size : 'xl', type : 'button' },
                    val : 1,
                    text : 'check'
                },
                ' ',
                {
                    block : 'dropdown',
                    mods : { switcher : 'button', theme : 'islands', size : 'xl' },
                    switcher : 'dropdown',
                    popup : { block : 'popup', mods : { theme : 'islands' }, content : 'popup' }
                },
                ' ',
                {
                    block : 'select',
                    mods : { mode : 'radio-check', theme : 'islands', size : 'xl' },
                    name : 'select',
                    text : 'first',
                    options : [
                        { val : 1, text : 'first', checked: true },
                        { val : 2, text : 'second' }
                    ]
                },
                ' ',
                {
                    block : 'spin',
                    mods : { theme : 'islands', size : 'xl', visible : true }
                }
            ]
        }
    ]
})
