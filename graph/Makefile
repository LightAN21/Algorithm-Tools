# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Makefile                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jtsai <marvin@42.fr>                       +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2019/09/22 16:32:06 by jtsai             #+#    #+#              #
#    Updated: 2019/11/08 12:32:47 by jtsai            ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

NAME = graph

FLAGS = -Wall -Wextra -Werror

FILES_0 = graph.cpp

FILES_LS = $(addprefix src_ft_ls/, $(FILES_0))

O_FILES = $(FILES_0:.c=.o)

all: $(NAME)

$(NAME):
	clang++ $(FLAGS) -std=c++17 -o $(NAME) $(FILES_0)

clean:
	/bin/rm -f $(NAME)

fclean:
	/bin/rm -f $(NAME)

re: fclean all
