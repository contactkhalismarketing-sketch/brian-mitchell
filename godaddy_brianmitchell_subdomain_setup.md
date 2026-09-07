# GoDaddy Setup: `brianmitchell.khalismarketing.com.au`

**Purpose:** Create a client-facing review address for the Brian Mitchell DDS mockup without changing the live `khalismarketing.com.au` website or email configuration.

> **Use a CNAME record for this setup.** The record will control only `brianmitchell.khalismarketing.com.au`; it does not change the root domain (`@`), `www`, or the domain’s MX/email records.

## Before opening GoDaddy

1. In the project Management UI, open **Settings → Domains**.
2. Add this exact domain: `brianmitchell.khalismarketing.com.au`.
3. Copy the **DNS target** shown by the Domains panel. Do not guess or substitute another target; use the exact value supplied there.

## Create the DNS record in GoDaddy

1. Sign in to GoDaddy and open **Domain Portfolio**.
2. Select `khalismarketing.com.au`, then choose **DNS**.
3. Search the records for `brianmitchell`.
   - If there is no existing record with that name, continue.
   - If a record already exists, do not delete or overwrite it until you confirm it is unused.
4. Choose **Add New Record**.
5. Enter the following values:

| Field | Value |
|---|---|
| **Type** | `CNAME` |
| **Name / Host** | `brianmitchell` |
| **Value / Points to** | Paste the exact DNS target from the project Domains panel |
| **TTL** | Default / 1 hour |

6. Select **Save**. If GoDaddy requests identity verification, complete that confirmation.

## Do not change these records

| Leave unchanged | Why |
|---|---|
| `@` A/AAAA records | These point the main agency website. |
| `www` record | This controls the existing `www.khalismarketing.com.au` address. |
| MX records | These control email delivery. |
| Existing SPF, DKIM, and DMARC TXT records | These protect email authentication and delivery. |

## Verify and use the domain

1. Return to **Settings → Domains** in the project and select **Verify** after saving the GoDaddy record.
2. DNS changes commonly appear within about an hour, but global propagation can take up to 48 hours.[1]
3. Once the domain verifies, test these client-review routes:

| Mockup | Branded URL |
|---|---|
| Homepage | `https://brianmitchell.khalismarketing.com.au/homepage` |
| Services | `https://brianmitchell.khalismarketing.com.au/services` |
| Cosmetic Dentistry | `https://brianmitchell.khalismarketing.com.au/cosmetic-dentistry` |
| About + team | `https://brianmitchell.khalismarketing.com.au/about-us` |
| Contact | `https://brianmitchell.khalismarketing.com.au/contact-us` |
| Blog index | `https://brianmitchell.khalismarketing.com.au/blogs` |
| Blog article | `https://brianmitchell.khalismarketing.com.au/blog/soft-tissue-management` |

## Troubleshooting

If GoDaddy does not display DNS controls for the domain, check its nameservers. GoDaddy can manage DNS only when the domain uses GoDaddy nameservers; otherwise, create the record with the DNS provider named by the active nameservers.[2]

If GoDaddy rejects the CNAME, check for an existing `brianmitchell` A, CNAME, or other conflicting record. A CNAME host must not already be in use by another record.[1]

## References

[1]: https://www.godaddy.com/help/add-a-cname-record-19236 "GoDaddy Help — Add a CNAME record"
[2]: https://www.godaddy.com/help/manage-dns-records-680 "GoDaddy Help — Manage DNS records"
