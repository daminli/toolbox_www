/*
 * File: app/view/UserAuth.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('main.view.UserAuth', {
    extend: 'Ext.panel.Panel',

    height: 250,
    width: 400,
    title: 'User Authrization',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'button',
                    activity: 'view',
                    text: 'search'
                },
                {
                    xtype: 'button',
                    text: 'Create'
                },
                {
                    xtype: 'button',
                    activity: 'delete',
                    text: 'Delete'
                },
                {
                    xtype: 'button',
                    activity: 'edit',
                    text: 'Edit'
                },
                {
                    xtype: 'button',
                    activity: 'upload',
                    text: 'upload'
                }
            ]
        });

        me.callParent(arguments);
    }

});