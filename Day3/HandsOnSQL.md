```SELECT SupportRepId, CustomerId, InvoiceId, TrackId, AlbumId
FROM customers JOIN invoices USING (CustomerId)
JOIN invoice_items USING (InvoiceId)
JOIN tracks USING (TrackId)
WHERE AlbumId IN (8, 21, 22, 23, 24, 25, 26, 27, 28, 29, 32, 33, 34, 41, 42, 45, 47, 52, 53)
ORDER BY SupportRepId```

```UPDATE customers 
SET SupportRepId = 6
WHERE CustomerId in
        ( SELECT customers.CustomerId
        FROM customers
                JOIN invoices USING(CustomerId)
                JOIN invoice_items USING (InvoiceId)
                JOIN tracks USING (TrackId)
                JOIN albums USING (AlbumId)
            WHERE AlbumId IN (8, 21, 22, 23, 24, 25, 26, 27, 28, 29, 32, 33, 34, 41, 42, 45, 47, 52, 53))```


```CREATE TABLE SuperDuperTopCustomers AS
SELECT (FirstName || " " || LastName) as FullName, Address, City, State, PostalCode, Phone, SUM(invoices.Total) as HighestTotal
FROM customers
JOIN invoices USING (CustomerId)
WHERE invoices.total > 15
GROUP BY customers.CustomerId```