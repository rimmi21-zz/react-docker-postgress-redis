# react-docker-postgress-redis

A fibonacci calculator on an nginx server. This runs on react and uses express as an API.

At first, a user enters a value which is an index. The Fibinacci calculator finds out the fibonacci number present on that particular index. Then, with the help of express API, all the indices and calculated values are sent and stored as key-value pairs in redis. Parallel to this, Postgress stores a permanent list of indices that have been received.

And the Worker folder has a very particular function. It watches for new indices. Pulls each new indice. Calculates new value and puts it back into redis.
