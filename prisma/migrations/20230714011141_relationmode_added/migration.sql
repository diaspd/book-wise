-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CategoriesOnBooks" (
    "book_id" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    PRIMARY KEY ("book_id", "categoryId")
);
INSERT INTO "new_CategoriesOnBooks" ("book_id", "categoryId") SELECT "book_id", "categoryId" FROM "CategoriesOnBooks";
DROP TABLE "CategoriesOnBooks";
ALTER TABLE "new_CategoriesOnBooks" RENAME TO "CategoriesOnBooks";
CREATE TABLE "new_accounts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT
);
INSERT INTO "new_accounts" ("access_token", "expires_at", "id", "id_token", "provider", "provider_account_id", "refresh_token", "scope", "session_state", "token_type", "type", "user_id") SELECT "access_token", "expires_at", "id", "id_token", "provider", "provider_account_id", "refresh_token", "scope", "session_state", "token_type", "type", "user_id" FROM "accounts";
DROP TABLE "accounts";
ALTER TABLE "new_accounts" RENAME TO "accounts";
CREATE UNIQUE INDEX "accounts_provider_provider_account_id_key" ON "accounts"("provider", "provider_account_id");
CREATE TABLE "new_sessions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "session_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);
INSERT INTO "new_sessions" ("expires", "id", "session_token", "user_id") SELECT "expires", "id", "session_token", "user_id" FROM "sessions";
DROP TABLE "sessions";
ALTER TABLE "new_sessions" RENAME TO "sessions";
CREATE UNIQUE INDEX "sessions_session_token_key" ON "sessions"("session_token");
CREATE TABLE "new_ratings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rate" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "book_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL
);
INSERT INTO "new_ratings" ("book_id", "created_at", "description", "id", "rate", "user_id") SELECT "book_id", "created_at", "description", "id", "rate", "user_id" FROM "ratings";
DROP TABLE "ratings";
ALTER TABLE "new_ratings" RENAME TO "ratings";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
