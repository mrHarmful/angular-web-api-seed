﻿using System;
using System.Web.Security;

namespace Seed.Bcs
{
    public class UserBc
    {

        private static UserBc _userBc;

        private static readonly object Locker;

        static UserBc()
        {
            Locker = new object();
        }

        public static UserBc Instance
        {
            get
            {
                if (_userBc == null)
                {
                    lock (Locker)
                    {
                        if (_userBc == null)
                        {
                            _userBc = new UserBc();
                        }
                    }
                }

                return _userBc;
            }
        }

        public MembershipUser GetUser(string username, string password)
        {
            throw new NotImplementedException();
        }

        public MembershipUser GetUser(long userId)
        {
            throw new NotImplementedException();
        }

        public MembershipUser GetUser(string username)
        {
            throw new NotImplementedException();
        }

        public bool IsUserInRole(string username, string roleName)
        {
            throw new NotImplementedException();
        }
    }
}
