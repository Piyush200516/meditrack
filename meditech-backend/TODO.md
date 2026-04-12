# MediTech Backend TODO - Server Fix Progress

## Server Startup & Auth Fix

✅ **Completed:**
- [x] Step 1: Diagnosed issues (express v5 beta, missing setup files)
- [x] Step 2: Fixed package.json (downgraded express to stable v4)

**Pending:**
- [ ] Step 3: User setup:
  - Copy .env.example → .env (add MySQL credentials)
  - Install & run MySQL, create meditrack DB
  - Run schema.sql to create users table
- [ ] Step 4: `cd meditech-backend && npm install && npm start`
- [ ] Step 5: Test endpoints: http://localhost:5000, /test-db, /register, /login
- [ ] Step 6: Frontend integration (AuthContext updates)

**Next:** Run `npm start` after .env & DB setup. Check console for errors.

**Test Commands:**
```
cd meditech-backend
npm start
# Visit: http://localhost:5000
# Test DB: http://localhost:5000/test-db
